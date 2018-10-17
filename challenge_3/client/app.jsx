
/**********COMPONENTS*********************

F1 collects name, email, and password for account creation.
F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.
F3 collects credit card #, expiry date, CVV, and billing zip code.

*/


/**************** ACCOUNT COMPONENT ***********************/
var Account = () => (
  <form>
    <label>
      Name:
      <input type="text"/>
    </label>
    <br/>
    <label>
      Email:
      <input type="email"/>
    </label>
    <br/>
    <label>
      Pasword:
      <input type="password"/>
    </label>
    <br/>
      <input type="submit" value="Submit" />
  </form>
);

/**************** ACCOUNT COMPONENT ***********************/
var Address = () => (
  <form> 
    <label>
      Line1:
      <input type="text"/>
    </label>
    <br/>
    <label>
      Line2:
      <input type="text"/>
    </label>
    <br/>
    <label>
      City:
      <input type="text"/>
    </label>
    <br/>
    <label>
      State:
      <input type="tex"/>
    </label>
    <br/>
    <label>
      Zip code:
      <input type="number"/>
    </label>
    <br/>
    <label>
      <input type="phone"/>
    </label>
    <br/>
      <input type="submit" value="Submit"/>
  </form>
);


/******************** PAYMENT **********************/

var Payment = () => (
  <form>
    <div class="form-group owner">
        <label for="owner">Owner</label>
        <input type="text" class="form-control" id="owner"/>
    </div>
    <div class="form-group CVV">
        <label for="cvv">CVV</label>
        <input type="text" class="form-control" id="cvv"/>
    </div>
    <div class="form-group" id="card-number-field">
        <label for="cardNumber">Card Number</label>
        <input type="text" class="form-control" id="cardNumber"/>
    </div>
    <div class="form-group" id="expiration-date">
        <label>Expiration Date</label>
        <select>
            <option value="01">January</option>
            <option value="02">February </option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
        </select>
        <select>
            <option value="16"> 2016</option>
            <option value="17"> 2017</option>
            <option value="18"> 2018</option>
            <option value="19"> 2019</option>
            <option value="20"> 2020</option>
            <option value="21"> 2021</option>
        </select>
    </div>
    <div class="form-group" id="pay-now">
        <button type="submit" class="btn btn-default" id="confirm-purchase">Confirm</button>
    </div>
  </form>
);

/*************** MAIN APP ***************/
class App extends React.Component {
	constructor(props) {
		super(props);
	}
	

	render() {
	  return (
	  	<div> 
	  	<Payment/>
	  	</div>

	  )
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));