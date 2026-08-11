import '../css/loading.css'

export const Loading = () => {
    return (
        <>
            <div className="pd-card">
                <div className="pd-loader">
                    <p>loading</p>
                    <div className="pd-words">
                        <span className="pd-word">buttons</span>
                        <span className="pd-word">forms</span>
                        <span className="pd-word">switches</span>
                        <span className="pd-word">cards</span>
                        <span className="pd-word">buttons</span>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Loading;