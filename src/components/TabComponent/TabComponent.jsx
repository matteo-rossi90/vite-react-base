export default function TabComponent({children, onSelect}){
    
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}