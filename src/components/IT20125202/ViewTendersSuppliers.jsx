import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ViewTendersSuppliers() {

    const navigate = useNavigate()
    const [tenders, setTenders] = React.useState([]);
    const [allTenders, setAllTenders] = React.useState([]);
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        axios.get('http://localhost:5000/tender/getall').then((res) => {
            const receivedTenders = res.data.exsitingTenders;
            // filter tenders by status and store
            const filteredTenders = receivedTenders.filter(tender => tender.status === 'Waiting for a supplier');

            setTenders(filteredTenders);
            setAllTenders(filteredTenders);
        }).catch((err) => {
            alert(err.message);
        })
    }, [])

    // for searching
    const handleSearchArea = (e) => {
        setSearch(e.target.value)
        setTenders(allTenders);
        if (search !== '') {
            setTenders(allTenders);
            filterData(search);
        }
    }

    const filterData = (searchKey) => {
        const searchResult = tenders.filter((tender) =>
            tender.expectedBudget.toLowerCase().includes(searchKey) ||
            tender.expectedBudget.toUpperCase().includes(searchKey) ||
            tender.expectedBudget.includes(searchKey)
        )
        setTenders(searchResult);
    }

    return (
        <div>
            {/*<div className='jumbotron' style={{ paddingLeft: '50px', paddingRight: '50px', paddingBottom: '50px', paddingTop: '10px', backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', margin: '0px 0px 0px 0px', overflowY: 'scroll', height: '100vh', borderTop: '5px solid black' }}>*/}
            <div className='jumbotron' style={{ background: 'white', minHeight: '100vh', padding: '30px 30px 30px 30px' }}>
                <br />
                <h1 style={{ textAlign: "center" }}> All Tenders </h1>
                <div className='col-lg-3 mt-2 mb-2'>
                    <input
                        className='form-control'
                        type="search"
                        value={search}
                        name="searchQuery"
                        placeholder='Search...'
                        onChange={handleSearchArea}>
                    </input>
                </div>
                <hr />
                {allTenders.length === 0 &&
                    <div style={{ textAlign: 'center' }}><h3> No Results Found </h3></div>
                }
                <table className="table table-hover table-bordered" style={{ border: '1px solid lightgray' }}>
                    {allTenders.length > 0 &&
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ExpectedBudget</th>
                                <th scope="col">Requested Date</th>
                                <th scope="col">Items</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                    }
                    {search.length > 0 && tenders.length > 0 &&
                        <tbody>
                            {tenders.map((tender, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{tender.expectedBudget}</td>
                                    <td>{new Date(tender.createdDate).toString()}</td>
                                    <td></td>
                                    <td> <button type="button" className="btn btn-outline-primary" onClick={() => navigate(`/tender/${tender._id}`)}><i className="fa fa-eye" />&nbsp;View</button> </td>
                                </tr>
                            ))}
                        </tbody>
                    }
                    {search.length > 0 && tenders.length === 0 &&
                        <tbody> <tr> <td colSpan="7" style={{ textAlign: "center" }}> <h3> No Results Found </h3> </td> </tr> </tbody>
                    }
                    {search.length === 0 && allTenders.length > 0 &&
                        <tbody>
                            {allTenders.map((tender, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{tender.expectedBudget}</td>
                                    <td>{new Date(tender.createdDate).toString()}</td>
                                    <td></td>
                                    <td> <button type="button" className="btn btn-outline-primary" onClick={() => navigate(`/suppliers/tender/${tender._id}`)}><i className="fa fa-eye" />&nbsp;View</button> </td>
                                </tr>
                            ))}
                        </tbody>
                    }
                </table>
            </div>
            {/*</div>*/}
        </div>
    )
}
