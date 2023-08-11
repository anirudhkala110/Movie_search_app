import React from 'react'

function Result({ result, openDetail }) {
    return (
        <>

            <div className="result m-3 border" style={{background:"black"}} onClick={e => openDetail(result.imdbID)}>
                <div className="pt-3 shadow image">
                    <img src={result.Poster} alt="" />
                </div>
                <div className=" bg-dark text-light p-3 ">
                    <h3>{result.Title}</h3>
                </div>
            </div>

        </>
    )
}

export default Result