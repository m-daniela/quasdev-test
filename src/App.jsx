import MessagesTable from "./components/MessagesTable";
import DataContextProvider from "./context/DataContextProvider";

function App() {
    return (
        <>
            <section>
                <h2>Requirements</h2>
                <p>
                    From <a href="https://2advanced.ro/tests/js-test.html">here</a>
                </p>
            </section>
            <section>
                <h2>Description</h2>
                <p>
                    Each row has an onclick event attached and, when clicked, the row contents change their color and another row appears underneath, containing the user card and message, with all available data. If the user is gold, the card&#39;s background is set to a golden color. 
                </p>
                <p>
                    When the user clicks the row again or on one of the cards, the information is hidden. 
                </p>
                <p>
                    I have used React to build the table and rowclick functionality. I have also used a package, called <a href="https://www.npmjs.com/package/light-sanitize-html">light-sanitize-html</a>, for sanitizing the message and comment string, since <code>&lt;br/&gt;</code> tags were present, so they could be inserted as HTML, without generating security issues. And I have used SASS instead of regular CSS because I find it easier to visualize the stylesheets in a nested format. 
                </p>
                <p>
                    I have chosen this approach to avoid creating the nodes manually and to make use of JSX, even if there are methods specifically created to work with tables in Vanilla Javascript (like <code>table.insertRow(), row.insertCell()</code>).
                </p>
                
                <p>
                    The users and messages arrays are made available globally using React Context API. 
                </p>
            </section>
            <section>
                <h2>Implementation</h2>
                <DataContextProvider>
                    <MessagesTable />
                </DataContextProvider>
            </section>
        </>
    );
}

export default App;
