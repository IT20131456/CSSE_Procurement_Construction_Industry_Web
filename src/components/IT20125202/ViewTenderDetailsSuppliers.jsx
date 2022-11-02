import React from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../IT20128036/supplier/NavBar'

export default function ViewTenderDetailsSuppliers() {

  const navigate = useNavigate()
  const { id } = useParams()
  const [tender, setTender] = React.useState({
    site: '',
    siteManagerID: '',
    siteManagerName: '',
    items: [],
    status: '',
    expectedBudget: 0,
    acceptedSupplier: '',
    actualAmount: 0,
    createdDate: ''
  })

  React.useEffect(() => {
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
  }, [id]);

  const onApprove = () => { }

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
          <hr/>
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
                <hr/>
                <div className='row'>
                  <div className='col-md-6'> <b>Size</b> </div>
                  <div className='col-md-6'> {tender.items.size} </div>
                </div>
                <hr/>
                <div className='row'>
                  <div className='col-md-6'> <b>Quantity</b> </div>
                  <div className='col-md-6'> {tender.items.quantity} </div>
                </div>
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h6> Expected Budget</h6>
            </div>
            <div className="col-md-6">
              <p>{tender.expectedBudget}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <h6> Actual Amount</h6>
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
            <div>
              <button className="btn btn-primary" onClick={() => onApprove()}>Accept</button>
            </div>
          )}

          {tender.status !== 'Need approval' && (
            <div>
              <button className="btn btn-primary" onClick={() => navigate(`/suppliers/tenders`)}>Back to orders</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}