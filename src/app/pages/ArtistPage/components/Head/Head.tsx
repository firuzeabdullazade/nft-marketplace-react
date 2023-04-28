import './Head.scss';

export const Head = () => {
    return (
        <>
        <section className="head">
        <div className="tab-1">
            <button>
                <h5>
                    Created
                </h5>
            </button>
            <div className="number-1">
                302
            </div>
        </div>
        <div className="tab">
            <button>
                <h5 className="subhead">
                    Owned
                </h5>
            </button>
            <div className="number">
                67
            </div>
        </div>
        <div className="tab">
            <button>
                <h5 className="subhead">
                    Colection
                </h5>
            </button>
            <div className="number">
                4
            </div>
        </div>
    </section>
        </>
    )
}