import { useState } from "react"
import { useDispatch } from 'react-redux';
import styles from '../page.module.css'
import { getForecastData } from "../../redux/slices/forecast";

const SearchComp = () => {
    const dispatch = useDispatch<any>();
    const [search, setSearch] = useState<string | number>("")
    const [error, setError] = useState<string>("")

    const handleSearchEvent = (searchValue: string | number) => {
        setSearch(searchValue)
    }

    // method to handle error
    const handleError = (error: string) => {
        setError(error)
        setTimeout(() => {
            setError("")
        }, 3000)
    }
    // method to call api incase some value in search box 
    const getSearchResult = () => {
        if (!search) {
            handleError("Please fill search box")
        }
        else {
            dispatch(getForecastData(search));
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="input-group mb-3">

                        <input type="text" value={search} className="form-control" placeholder="Search by city name.." aria-label="search" aria-describedby="basic-addon2" onChange={(e) =>
                            handleSearchEvent(e.target.value)
                        } />
                        <div className={`input-group-append ${styles.appendBtn}`} onClick={() => getSearchResult()}>
                            <span className="input-group-text" id="basic-addon2"> <i className="bi-search"></i></span>
                        </div>

                    </div>
                    <p className={styles.errorValidaiton}>{error}</p>
                </div>
            </div>
        </>
    )
}
export default SearchComp;