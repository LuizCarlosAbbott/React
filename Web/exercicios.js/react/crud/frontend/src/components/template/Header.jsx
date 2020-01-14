import './Header.css'
import React from 'react'

export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <p className="lead text-muted">{props.subtitle}</p>
    </header>

/* d-none -> para celulaes o header não vai aparecer */
/* d-sm-flex para dispositivos pequenos usar o d-flex */
/* flex-column para usar a coluna */