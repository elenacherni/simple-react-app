import React from 'react'

const Button = ({title, onClickFn}: {title: string, onClickFn: () => void}) => {
    return (
        <button className="btn" onClick={onClickFn}>{title}</button>
    )
}

export default Button
