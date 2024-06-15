import { NavLink } from "react-router-dom"

const style = {
    display: 'flex',
    alignItems: 'center',
}

const imgStyle = {
    width: '1.5rem',
    height: '1.5rem',
    marginRight: '10px',
}

export default function ListIcon(props: any) {
    return (
        <li className={props.className}>        
            <NavLink replace style={style} to={props.to}><img style={imgStyle} src={props.src} alt={props.alt} />{props.text}</NavLink>
        </li>
    )
}