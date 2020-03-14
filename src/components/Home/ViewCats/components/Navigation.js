import React from 'react'
import { NavigationIcon } from './Navigation-icon'

export const Navigation = () => (
    <div className="navigation">
        <div>
            <NavigationIcon name="arrow-undo" />
        </div>
        <div className="image-couple">
            <img src="https://www.hola.com/imagenes/estar-bien/20180926130368/como-saber-si-mi-gata-esta-en-celo/0-603-746/como-saber-si-mi-gata-esta-en-celo-ok-t.jpg" />
            <h3>@princess</h3>
            <p>Soy tierna, me gusta cazar pajaros y comer galletas de la suerte. Da like para que salgamos a cazar!</p>
        </div>
        <div>
            <NavigationIcon name="arrow-redo" />
        </div>
    </div>
)