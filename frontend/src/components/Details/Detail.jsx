import React from 'react'

function Detail({ selected, close }) {
    return (
        <>

            <div className="d-flex flex-column justify-content-center text-light">
                <div className="container bg-dark p-3 mt-5 p-5">
                    <div className="row border-light p-5 shadow">
                        <div className="col-10 col-md-6  border-light text-center d-flex justify-content-center align-items-center">
                            <img src={selected.Poster} />
                        </div>
                        <div className="col-12 col-md-6">
                            <h2>{selected.Title}</h2>
                            <p><strong>Year :</strong> {selected.Year}</p>
                            <p><strong>Rating :</strong> {selected.imdbRating}</p>
                            <p><strong>Description :</strong> {selected.Plot}</p>
                            <button onClick={close} className='btn btn-danger mt-5'>Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Detail