import ReactFlow, { Controls } from "reactflow";
import 'reactflow/dist/style.css';
const html2json = require('html2json').html2json;

const initialNodes = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Input Node' },
        position: { x: 250, y: 25 },
    },
  
    {
        id: '2',
        // you can also pass a React component as a label
        data: { label: <div>Default Node</div> },
        position: { x: 100, y: 125 },
    },
    {
        id: '3',
        type: 'output',
        data: { label: 'Output Node' },
        position: { x: 250, y: 250 },
    },
];
  
const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3', animated: true },
];

const proOptions = { hideAttribution: true };

function App() {

    // const onFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(html2json(e.target.files[0]))
    // }

    console.log(html2json(document.body.innerHTML))

    // const json = 

    return (
        <>
            {/* <input type={'file'} onChange={onFileImport}/> */}
            <div style={{ height: '100vh', width: '100vw' }}>
                <ReactFlow
                    nodes={initialNodes}
                    edges={initialEdges}
                    // onNodesChange={(changes: NodeChange[]) => dispatch(flowActions.onChangeNodes(changes))}
                    // onEdgesChange={(changes: EdgeChange[]) => dispatch(flowActions.onChangeEdges(changes))}
                    // onConnect={(changes: Connection) => dispatch(flowActions.onConnect(changes))}
                    // onNodesDelete={(e) => console.log(e)}
                    // fitView
                    // nodeTypes={NodeTypes}
                    proOptions={proOptions}
                >
                    <Controls/>
                </ReactFlow>
            </div>
        </>
    );
}

export default App;
