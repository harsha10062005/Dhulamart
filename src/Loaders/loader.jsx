import '../css/loader.css'

export const Loader = () => {
    return (
        <>
            <div className="loader-container">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                    <div className="loader-item" key={item}>
                        <div className="loader">
                            <div className="wrapper">
                                <div className="circle"></div>
                                <div className="line-1"></div>
                                <div className="line-2"></div>
                                <div className="line-3"></div>
                                <div className="line-4"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}