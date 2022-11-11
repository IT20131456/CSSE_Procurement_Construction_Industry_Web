import React from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../IT20128036/supplier/NavBar'
import swal from 'sweetalert'
import { supplierDetails } from "../IT20128036/staff/AxiosCall";

export default function ViewTenderDetailsStaff() {

  const navigate = useNavigate()
  const { id } = useParams()
  const [tender, setTender] = React.useState({
    site: '',
    siteManagerID: '',
    siteManagerName: '',
    items: {},
    status: '',
    expectedBudget: 0,
    acceptedSupplier: '',
    actualAmount: 0,
    createdDate: ''
  })
  const [suppliers, setSuppliers] = React.useState([]);
  const [selectedSupplier, setSelectedSupplier] = React.useState('');

  React.useEffect(() => {
    document.title = "Tender Details"
    axios.get(`http://localhost:5000/tender/get/${id}`).then((res) => {
      const receivedTender = res.data.existingTender;
      setTender({
        site: receivedTender.site,
        siteManagerID: receivedTender.siteManagerID,
        siteManagerName: receivedTender.siteManagerName,
        items: receivedTender.items,
        status: receivedTender.status,
        expectedBudget: receivedTender.expectedBudget,
        acceptedSupplier: receivedTender.acceptedSupplier,
        actualAmount: receivedTender.actualAmount,
        createdDate: receivedTender.createdDate
      });
    }).catch((err) => {
      alert(err.message);
    })

    supplierDetails().then((res) => {
      if (res.data.success) {
        setSuppliers(res.data.exsitingSupplierDetails);
      }
    });

  }, [id]);

  const onReject = () => {
    axios.patch(`http://localhost:5000/tender/update/${id}`, { status: "Rejected" }).then((res) => {
      swal("Tender Rejected!", "Tender has been rejected successfully!", "success").then((value) => {
        if (value) {
          navigate('/staff/tenders');
        }
      });
    }).catch((err) => {
      alert(err.message);
    })
  }

  const onApprove = () => {
    axios.patch(`http://localhost:5000/tender/update/${id}`, { status: "Waiting for a supplier" }).then((res) => {
      swal("Tender Approved!", "Tender has been approved successfully!", "success").then((value) => {
        if (value) {
          navigate('/staff/tenders');
        }
      });
    }).catch((err) => {
      alert(err.message);
    })
  }

  const onAssign = () => {
    axios.patch(`http://localhost:5000/tender/update/${id}`, { status: "In progress", acceptedSupplier: selectedSupplier }).then((res) => {
      swal("Tender Assigned!", "Tender has been assigned successfully!", "success").then((value) => {
        if (value) {
          navigate('/staff/tenders');
        }
      });
    }).catch((err) => {
      alert(err.message);
    })
  }

  return (
    <div>
      <NavBar />
      {/*<div className='jumbotron' style={{ paddingLeft: '50px', paddingRight: '50px', paddingBottom: '50px', paddingTop: '10px', backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', margin: '0px 0px 0px 0px', overflowY: 'scroll', height: '100vh', borderTop: '5px solid black' }}>*/}
      <div className="container text-center my-2">
        <div className='jumbotron' style={{ background: 'white', minHeight: '100vh', padding: '30px 30px 30px 30px', textAlign: 'left' }}>
          <br />
          <h1 style={{ textAlign: "center" }}> Tender Details </h1>
          <br />
          <hr />
          <br />
          <div className="row">
            <div className="col-md-6">
              <h6> Site </h6>
            </div>
            <div className="col-md-6">
              <p>{tender.site}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h6> Site Manager ID</h6>
            </div>
            <div className="col-md-6">
              <p>{tender.siteManagerID}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h6> Site Manager Name</h6>
            </div>
            <div className="col-md-6">
              <p>{tender.siteManagerName}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h6> Items</h6>
            </div>
            <div className="col-md-6">
              <p>
                <div className='row'>
                  <div className='col-md-6'> <b>Item</b> </div>
                  <div className='col-md-6'> {tender.items.name} </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-md-6'> <b>Size</b> </div>
                  <div className='col-md-6'> {tender.items.size} </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-md-6'> <b>Quantity</b> </div>
                  <div className='col-md-6'> {tender.items.quantity} </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-md-6'> <b>Order Status</b> </div>
                  <div className='col-md-6'> {tender.items.orderStatus} </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-md-6'> <b>Received Amount</b> </div>
                  <div className='col-md-6'> {tender.items.receivedAmount} </div>
                </div>
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h6> Status</h6>
            </div>
            <div className="col-md-6">
              <p>{tender.status}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h6> Expected Budget (Rs.)</h6>
            </div>
            <div className="col-md-6">
              <p>{tender.expectedBudget}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h6> Accepted Supplier</h6>
            </div>
            <div className="col-md-6">
              <p>{tender.acceptedSupplier}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h6> Actual Amount (Rs.)</h6>
            </div>
            <div className="col-md-6">
              <p>{tender.actualAmount}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h6> Created Date</h6>
            </div>
            <div className="col-md-6">
              <p>{tender.createdDate}</p>
            </div>
          </div>
          <hr />
          <br />

          {tender.status === 'Need approval' && (
            <div style={{ textAlign: 'right' }}>
              <button className="btn btn-success" onClick={() => onApprove()}>Approve</button>
              &nbsp;
              <button className="btn btn-danger" onClick={() => onReject()}>Reject</button>
            </div>
          )}

          {tender.status === 'Waiting for a supplier' && (
            <div>
              <hr />
              <hr />
              <div style={{ textAlign: 'center' }}>
                <h5>Assign a supplier for this tender</h5>
              </div>
              <div style={{textAlign: 'center'}}>
                <select id='supplierName' onChange={(e) => setSelectedSupplier(e.target.value)}>
                  {suppliers.map((supplier) => (
                    <option value={supplier.name}>{supplier.name}</option>
                  ))}
                </select>
                <br /><br />
                <div style={{ textAlign: 'center' }}>
                  <button className='btn btn-primary' onClick={() => onAssign()}>Assign</button>
                </div>
                <br /><br />
              </div>
            </div>
          )}
          {tender.status !== 'Waiting for a supplier' && tender.status !== 'Need approval' && (
            <button className="btn btn-primary" onClick={() => navigate(`/staff/tenders`)}>Back to orders</button>
          )}
        </div>
      </div>
    </div>
  )
}