## 2. Why `useState` is Appropriate for Handling State in a Complex Component

The `useState` hook is a fundamental tool in React for managing state within function components. It is particularly well-suited for handling state in complex components because of its:

### Simplicity
`useState` provides a straightforward API to manage local state within a component, making it easy to implement and understand.

### Reactivity
When the state changes, `useState` triggers a re-render of the component, ensuring that the UI reflects the latest state without requiring manual updates.

### Encapsulation
By encapsulating state management within a component, `useState` allows each component to manage its own state independently, leading to more modular and maintainable code.

#### Example:
```javascript
function ComplexComponent() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Ashish');

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>{name}, you've clicked {count} times</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
```
In this example, `useState` manages both `count` and `name`, allowing `ComplexComponent` to handle user interactions and update the UI efficiently. This approach keeps the logic related to the component's behavior self-contained, making it easier to maintain and extend.

