import React from 'react'
import { NavigationIcon } from './Navigation-icon'
import { Couple } from './Couple'

export const Navigation = () => (
    <div className="navigation">
        <div>
            <NavigationIcon name="arrow-undo" />
        </div>
        <Couple
            image="https://www.hola.com/imagenes/estar-bien/20180926130368/como-saber-si-mi-gata-esta-en-celo/0-603-746/como-saber-si-mi-gata-esta-en-celo-ok-t.jpg"
            username="@princess"
            description="Soy tierna, me gusta cazar pajaros y comer galletas de la suerte. Da like para que salgamos a cazar!"
        />
        <div>
            <NavigationIcon name="arrow-redo" />
        </div>
    </div>
)