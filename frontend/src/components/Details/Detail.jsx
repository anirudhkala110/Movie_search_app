import React from 'react'

function Detail({ selected, close }) {
    return (
        <>

            <div className="d-flex flex-column justify-content-center text-light">
                <div className="container bg-dark p-3 mt-5 p-5">
                    <div className="row border-light p-5 " style={{ boxShadow: "#00000069 0px 3px 3px" }}>
                        <div className="col-10 col-md-5 m-3 border-light text-center d-flex justify-content-center align-items-center">
                            <img src={selected.Poster} className='imghover' />
                        </div>
                        <div className="col-12 col-md-6 m-3">
                            <h2>{selected.Title}</h2>
                            <p><strong>Year &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> {selected.Year}</p>
                            <p><strong>Type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> {selected.Type}</p>
                            <p><strong>Rating &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> {selected.imdbRating}</p>
                            <p><strong>Description &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong> {selected.Plot}</p>
                            <button onClick={close} className='btn btn-danger mt-5'>Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Detail