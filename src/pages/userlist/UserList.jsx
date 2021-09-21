import "./userlist.css"
import { DataGrid } from '@material-ui/data-grid';
import {HighlightOffRounded} from '@material-ui/icons';
import {Link} from "react-router-dom";
import { useState } from "react";
import {userRows} from "../../SomeData.js";

export default function UserList()
{
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'USER',
          width: 200,
          editable: true,
          renderCell: (params) => {
              return(
                  <div className="userL">
                      <img className = "userImg" src={params.row.avatar} alt=""/>
                      {params.row.username}
                  </div>
              )
          }
        },
        {
          field: 'email',
          headerName: 'EMAIL',
          width: 250,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'STATUS',
          width: 150,
          editable: true,
        },
        {
            field:"action",
            headerName: "ACTION",
            width: 150,
            renderCell: (params) =>{
                return(
                    <>
                        <Link to={"/user/"+params.row.id}>
                            <button className="userListEdit">EDIT</button>
                        </Link>
                        <HighlightOffRounded className="userListDelete" onClick = {() =>handleDelete(params.row.id) }/>
                    </>
                )
            }
        },
      ];
      
      const rows = [
        { 
            id: 1, 
            username: 'cukiereczek2009', 
            avatar: 'https://pbs.twimg.com/profile_images/1265406472042790913/-0A7qKdj_400x400.jpg',
            email: 'candy2009@gmail.com', 
            status: 'busy today',
        },
        { 
            id: 2, 
            username: 'cukiereczek2009', 
            avatar: 'https://pbs.twimg.com/profile_images/1265406472042790913/-0A7qKdj_400x400.jpg',
            email: 'candy2009@gmail.com', 
            status: 'busy today',
        },
        { 
            id: 3, 
            username: 'cukiereczek2009', 
            avatar: 'https://pbs.twimg.com/profile_images/1265406472042790913/-0A7qKdj_400x400.jpg',
            email: 'candy2009@gmail.com', 
            status: 'busy today',
        },
        { 
            id: 4, 
            username: 'cukiereczek2009', 
            avatar: 'https://pbs.twimg.com/profile_images/1265406472042790913/-0A7qKdj_400x400.jpg',
            email: 'candy2009@gmail.com', 
            status: 'busy today',
        },
      ];
    
    return(
        <div className="userlist">
            <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    )
}