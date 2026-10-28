import ConditionalRender from './components/ConditionalRender'
import ConditionalRender1 from './components/ConditionalRender1'
import ListRender from './components/ListRender'
import PropsEx from './components/PropsEx'
import UseState from './components/UseState'
import UseState1 from './components/UseState1'

const App = () => {
  return (
    <div>
      <PropsEx name="John" age={30} />
      <ConditionalRender isLoggedIn={false}/>
      <ConditionalRender1 isLoggedIn={true}/>
      <ListRender/>
      <UseState/>
      <UseState1/>
    </div>
  )
}

export default App