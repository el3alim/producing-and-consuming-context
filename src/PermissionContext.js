import React from "react";

// Creating a permissions context() hook to provide button display permission data across the app layers and consume display permissions on separate components.
// It has 2 properties; a provider that is used to wrap the top layer of the structure and provide data to its child components,
// and a comsumer that is used to wrap specific components and provids data to them, which it recieves from the provider component.
const { Provider, Consumer } = React.createContext("permissions");

// Decalring the context provider() function.
class PermissionProvider extends React.Component {
  // Declaring the state that is to be passed via the context provider.
  state = {
    first: true,
    second: false,
    third: true,
  };

  // Returning the provider and assigning the values to be passed to lower layers that are wrapped by it.
  // The value property is set to contain the state of this component, and is passed through the provider components' child elements.
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

// Decalring the context consumer() function.
// It takes in name and children as the functions properties, which are later provided as argument from the elements that are wrapped by the consumer component.
// I child element of this consumer component would only be displayed if value[name] = true.
// The value argument in the consumers' child function here is passed to the consumer by the provider property of the context() hook, which it initially receives from the provider component.
// The value of the providers' state objects' key that matches the name property passed to the consumer component from its child element is checked.
// If that value is true, the consumers' child is displayed, or else, it is not displayed.
const PermissionConsumer = ({ name, children }) => (
  <Consumer>{(value) => value[name] && children}</Consumer>
);

export { PermissionProvider, PermissionConsumer };
