import React  from 'react';


class Button extends React.Component {


render () {


return (

<div>

  <button onClick={this.props.onClickHandler}>Click Me!</button>
</div>

)


}



}

export default Button;
