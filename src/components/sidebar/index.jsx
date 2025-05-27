import './sidebar.css'

function Sidebar({sidebarprops}){   
    return(
        <div className="sidebar-wrapper">
            {
                sidebarprops.map((section)=>{
                    return(
                        <div className="sidebar-container" key={section.section}>
                            <h4 className="sidebar-headings">{section.section}</h4>
                            <ul>
                                    {section.items.map((item)=>{
                                        return(
                                            <li key={item.title} className='list'>
                                                <div>
                                                    {item.icon}
                                                    {item.title}
                                                </div>
                                            </li>
                                        )
                                    })}
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sidebar