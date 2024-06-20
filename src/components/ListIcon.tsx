import { NavLink } from "react-router-dom"

const style: any = {
    display: 'flex',
    alignItems: 'center',
    userSelect: 'none',
}

const imgStyle: any = {
    width: '1.5rem',
    height: '1.5rem',
    marginRight: '10px',
}

export default function ListIcon(props: any) {
    return (
        <li className={props.className}>        
            <NavLink draggable="false" replace style={style} to={props.to}><img draggable="false" style={imgStyle} width="50px" height="50px" src={props.src} alt={props.alt} />{props.text}</NavLink>
        </li>
    )
}