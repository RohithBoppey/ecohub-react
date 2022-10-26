import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './showdata.css';
const ShowUserData = () => {
	
	return (
        <>
		<br></br><br></br>
		<h2 className="h2-sd">Customer Details :</h2>
		<br></br>
        <div className="alcenter">
		<table border="2px black"  className="table-sd table-hover">
			<tr className="tr-sd">
				<th className="th-sd"><b className="b-sd">Username</b></th>
				<th className="th-sd"><b className="b-sd">Full Name</b></th>
				<th className="th-sd"><b className="b-sd">Email</b></th>
				<th className="th-sd"><b className="b-sd">Gender</b></th>
				<th className="th-sd"><b className="b-sd">Mobile No</b></th>
				<th className="th-sd"><b className="b-sd">Address</b></th>
				<th className="th-sd"><b className="b-sd">City</b></th>
				<th className="th-sd"><b className="b-sd">Delete</b></th>

			</tr>


			<tr className="tr-sd">
					<th className="th-sd">
						hit
					</th>
					<th className="th-sd">
						hitesh
					</th>
					<th className="th-sd">
						hit@gmail.com
					</th>
					<th className="th-sd">
						male
					</th>
					<th className="th-sd">
						7330707717
					</th>
					<th className="th-sd">
						ring road
					</th>
					<th className="th-sd">
						vzm
					</th>
					<th className="th-sd">
						<a href="/admin/deleteuser/<%= cust._id %>"><center><button name="delete" type="submit" className="btn btn-outline-primary button-sd">Delete</button></center></a>
					</th>
				</tr>
                <tr className="tr-sd">
					<th className="th-sd">
                    rohBop
					</th>
					<th className="th-sd">
                    Rohith Boppey
					</th>
					<th className="th-sd">
                    r@g.com
					</th>
					<th className="th-sd">
						male
					</th>
					<th className="th-sd">
						9848765937
					</th>
					<th className="th-sd">
						ecil
					</th>
					<th className="th-sd">
                    Hyderabad
					</th>
					<th className="th-sd">
						<a href="/admin/deleteuser/<%= cust._id %>"><center><button name="delete" type="submit" className="btn btn-outline-primary button-sd">Delete</button></center></a>
					</th>
				</tr>
                <tr className="tr-sd">
					<th className="th-sd">
                    SantoshK
					</th>
					<th className="th-sd">
                    Santosh K
					</th>
					<th className="th-sd">
                    santosh.k@gmail.com
					</th>
					<th className="th-sd">
						male
					</th>
					<th className="th-sd">
						9367467582
					</th>
					<th className="th-sd">
						gachibowli
					</th>
					<th className="th-sd">
                    Hyderabad
					</th>
					<th className="th-sd">
						<a href="/admin/deleteuser/<%= cust._id %>"><center><button name="delete" type="submit" className="btn btn-outline-primary button-sd">Delete</button></center></a>
					</th>
				</tr>
                <tr className="tr-sd">
					<th className="th-sd">
                    BargavK
					</th>
					<th className="th-sd">
                    Bargav Koduri
					</th>
					<th className="th-sd">
                    bargavk@g.com
					</th>
					<th className="th-sd">
						male
					</th>
					<th className="th-sd">
                    9533666898
					</th>
					<th className="th-sd">
						there only 
					</th>
					<th className="th-sd">
                    Kakinada
					</th>
					<th className="th-sd">
						<a href="/admin/deleteuser/<%= cust._id %>"><center><button name="delete" type="submit" className="btn btn-outline-primary button-sd">Delete</button></center></a>
					</th>
				</tr>
                <tr className="tr-sd">
					<th className="th-sd">
                    AbhinavP
					</th>
					<th className="th-sd">
                    Abhinav Kumar Padala
					</th>
					<th className="th-sd">
                    santosh.k@gmail.com
					</th>
					<th className="th-sd">
						male
					</th>
					<th className="th-sd">
                    9533666898
					</th>
					<th className="th-sd">
						miyapur
					</th>
					<th className="th-sd">
                    Hyderabad
					</th>
					<th className="th-sd">
						<a href="/admin/deleteuser/<%= cust._id %>"><center><button name="delete" type="submit" className="btn btn-outline-primary button-sd">Delete</button></center></a>
					</th>
				</tr>
                

		</table>
        </div>
        </>
	);
};

export default ShowUserData;