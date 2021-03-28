import React from 'react'

function ModalContent() {
    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col">
                    <h5 className="modal__title">Find Hip-Hop(SPA)</h5>
                    <h6 className="modal__subtitle">by Abot Lucas.</h6>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img className="modal__img" src="https://media-exp1.licdn.com/dms/image/C4D03AQGDDQQG5VxFGA/profile-displayphoto-shrink_800_800/0/1592542401053?e=1622073600&v=beta&t=9hDkV9cxHaPGQq50Exn2WIf15HFznSe0PJK85faXg6I" alt="abotlucas"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <a href="https://www.linkedin.com/in/abotlucas/" className="btn btn-primary btn-block mt-3" title="Segui a Lucas en LinkedIn!">LinkedIn</a>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <a href="https://github.com/AbotLucas" className="btn btn-success btn-block mt-3" title="El repositorio GitHub de Lucas.">Git-Hub</a>
                </div>
            </div>
            
        </div>
    )
}

export default ModalContent
