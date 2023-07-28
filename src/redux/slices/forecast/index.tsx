import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { callApi } from '../../../helpers/callApi';
import { getDaysList } from "../../../helpers/dateUtils";
interface ForeCastState {
    foreCastData: { Data: {}, isLoading: boolean, isSuccess: boolean, error: { status: boolean, msg: string } }
}

const initialState = {
    foreCastData: { Data: {}, isLoading: false, isSuccess: false, error: { status: false, msg: "" } },
} as ForeCastState


let forecastResponse = (data: any) => {
    const daysList = getDaysList();
    let selectedDayForecast = {}
    data.list.slice(1).forEach((i: any, index: number) => {
        let dayName = daysList[index]
        if (dayName) {
            if (!index) {
                selectedDayForecast = {
                    city: data.city,
                    day: dayName,
                    temp: {
                        temp_max: i.main.temp_max,
                        temp_min: i.main.temp_min,
                    },
                    weather: i.weather[0],
                    main: i.main,
                    wind: i.wind,
                }
            }
        }
    });
    return {
        data: { selectedDayForecast },
    };
};

// Method to api 
export const getForecastData = createAsyncThunk(
    'ForeCast/getForecastData',
    async (searchValue: any, thunkAPI) => {
        try {
            let url = `http://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&units=metric&appid=${process.env.NEXT_APP_WEATHER_KEY}`
            const resp = await callApi(url, 'Get', {});
            return forecastResponse(resp);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

const ForeCastSlice = createSlice({
    name: 'ForeCast',
    initialState,
    reducers: {

    },
    extraReducers: (builder: any) => {
        builder.addCase(getForecastData.pending, (state: any) => {
            state.foreCastData.isLoading = true;
            state.foreCastData.isSuccess = false;
            state.foreCastData.error.status = false;
        })
        builder.addCase(getForecastData.rejected, (state: any, action: any) => {
            state.foreCastData.isLoading = false;
            state.foreCastData.isSuccess = false;
            state.foreCastData.error.status = true;
            state.foreCastData.error.msg = action.payload;
        })
        builder.addCase(getForecastData.fulfilled, (state: any, action: any) => {
            state.foreCastData.Data = action.payload;
            state.foreCastData.isLoading = false;
            state.foreCastData.isSuccess = true;
            state.foreCastData.error.status = false;
        })
    },
});

export default ForeCastSlice.reducer;
