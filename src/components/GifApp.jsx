import { useGif } from "../hooks/useGif"
export const GifApp = () => {
    const{handleGetGif,gif} = useGif()
    return(
        <>
            <div className="d-flex flex-row justify-content-center alig-items-center mt-3">
                <button onClick={handleGetGif} className="btn btn-outline-success">Generar Gif</button>
            </div>
            <div className="d-flex flex-row justify-content-center alig-items-center">
                <img className="w-0 m-5" src={gif} alt="image" />
            </div>
 
        </>
 
    )
}