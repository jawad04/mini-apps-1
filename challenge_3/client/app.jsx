
// /**********COMPONENTS*********************
// F1 collects name, email, and password for account creation.
// F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
// F3 collects credit card #, expiry date, CVV, and billing zip code.
// */
// /**************** ACCOUNT COMPONENT ***********************/
const Account = props => (
  <div>
  <h1> Account Infromation </h1>
    <form>
    <label>
      Name:
      <input type='text' name='name' onChange={props.handle}/>
      </label>
      <br/>
      <label>
      Email:
      <input type='email' name='email' onChange={props.handle}/>
      </label>
      <br/>
      <label>
      Password:
      <input type='password' name='password' onChange={props.handle}/>
      </label>
      <br/>
    </form>
    <button className='next' onClick={props.handleClick}>Next</button>
  </div>
);


// /**************** ADDRESS COMPONENT ***********************/
const Address = props => (
  <div>
  <h1> Address Information </h1>
    <form>
      <label>
      Line1:
      <input type='text' name='line1' onChange={props.handle}/>
      </label>
      <br/>
      <label>
      Line2:
      <input type='text' name='line2' onChange={props.handle}/>
      </label>
      <br/>
      <label>
      City:
      <input type='text' name='city' onChange={props.handle}/>
      </label>
      <br/>
      <label>
      State:
      <input type='text' name='state' onChange={props.handle}/>
      </label>
      <br/>
      <label>
      ZipCode:
      <input type='number' name='zip' onChange={props.handle}/>
      </label>
      <br/>
      <label>
      Phone:
      <input type='number' name='phone' onChange={props.handle}/>
      </label>
      <br/>
    </form>
    <button className='next' onClick={props.handleClick}>Next</button>
  </div>
);

// /******************** PAYMENT COMPONENT **********************/
const Payment = props => (
  <div>
  <h1> Payment </h1>
    <form>
      <label>
      Credit Card:
      <input type='number' name='creditCard' onChange={props.handle}/>
      </label>
      <br/>
      <label>
      Expiration Date:
      <input type='number' name='expDate' onChange={props.handle}/>
      </label>
      <br/>
      <label>
      CVV:
      <input type='number' name='CVV' onChange={props.handle}/>
      </label>
      <br/>
      <label>
      Billing Zip:
      <input type='number' name='billingZip' onChange={props.handle}/>
      </label>
      <br/>
    </form>
    <button className='next' onClick={props.handleClick}>Next</button>
  </div>
);

// /******************** PURCHASE COMPONENT **********************/
const Purchase = props => (
	<div>
	<div> <h1> Finish Payment</h1></div>
  <button className='purchase' onClick={props.handleClick}>Purchase</button>
  </div>
);


// /******************** CHECKOUT COMPONENT **********************/
const Checkout = props => (
  <div>
  <div>
  <h1> Checkout </h1>
  </div>
  <button className='checkout' onClick={props.handleClick}>Checkout</button>
  </div>
);


// /*************** MAIN APP ***************/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipCode: '',
      phone: '',
      creditCard: '',
      expDate: '',
      CVV: '',
      billingZip: ''
    };
    this.nextPage = this.nextPage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
 
componentDidMount() {
		$.ajax('/checkout', {
			success: (data) => {
			this.setState({
  			  count: data.count,
		      name: data.name,
		      email: data.email,
		      password: data.password,
		      line1: data.line1,
		      line2: data.line2,
		      city: data.city,
		      state: data.state,
		      zipCode: data.zipCode,
		      phone: data.phone,
		      creditCard: data.creditCard,
		      expDate: data.expDate,
		      CVV: data.CVV,
		      billingZip: data.billingZip
  			})
		  }
		})
	}


  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  nextPage() {
    this.setState({count: this.state.count + 1});
  }
  handlePage() {
    if (this.state.count === 0) {
      return (<Checkout handleClick={this.nextPage}/>);
    } else if (this.state.count === 1) {
      return (<Account handleClick={this.nextPage} handle={this.handleChange}/>);
    } else if (this.state.count === 2) {
      return (<Address handleClick={this.nextPage} handle={this.handleChange}/>);
    } else if (this.state.count === 3) {
      return (<Payment handleClick={this.nextPage} handle={this.handleChange}/>);
    } else if (this.state.count === 4) {
      return (<Purchase handleClick={this.nextPage}/>);
    }else {
      // this.setState({page: 0});
      this.state.count = 0;
      return (<Checkout handleClick={this.nextPage}/>);
    }
    console.log(this.state);
  }
	render() {
    return (this.handlePage());
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

