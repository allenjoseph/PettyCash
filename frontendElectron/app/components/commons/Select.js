import React from 'react';

export default React.createClass({
    render(){

        let data = this.props.data || [];

        if(this.props.placeholder){
            data.unshift({ id: '0', name: this.props.placeholder});
        }

        let options = data.map((option) => {
            return <option key={option['id']} value={option['id']}>{option['name']}</option>;
        });

        return(
            <select className={this.props.style} onChange={this.props.onChange} 
            disabled={this.props.disabled} value={this.props.value} name={this.props.name}>

                { options }

            </select>
        );
    }
});