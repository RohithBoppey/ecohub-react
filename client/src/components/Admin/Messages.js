import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Admin/Navbar/Navbar"
import './messages.css';
const Messages = () => {
	
	return (
        <>
        <Navbar/>
        <br></br><br></br>
        <h2 className='h2-m'>Messages from Customers:</h2>
        <br></br>
        <div className="alcenter">
        <table className='table-m' border="2px" style={{"margin": "20px"}}>
            <tr className='tr-m'>
                <th className='th-m'>Email</th>
                <th className='th-m'>Type of Query</th>
                <th className='th-m'>Message</th>
                <th className='th-m'>Send Email</th>
                <th className='th-m'>Delete</th>
            </tr>
                <tr className='tr-m'>
                    <th className='th-m'>
                        hit@gmail.com
                    </th>
                    <th className='th-m'>
                        uthane
                    </th>
                    <th className='th-m'>
                        nice product
                    </th>
                    <th className='th-m'>
                        <form>
                            <a href="mailto: <%=message.email %>" target="_blank"><button name="delete" type="submit"
                                class="btn btn-outline-primary">Send Email</button></a>
                        </form>
                    </th>

                    <th className='th-m'>
                        <form action="/admin/msgdelete/<%= message._id %>" method="post">
                            <center><button name="delete" type="submit" class="btn btn-outline-primary">Delete</button></center>
                        </form>
                    </th>

                </tr>
            
        </table>
        </div>
		</>
	);
};

export default Messages;