import Basket from '@/features/basket/basket';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Card from '../features/catalog/ui/catalogLayout/cards';
import Catalog from '../pages/catalog/catalog';
import PageMain from '../pages/main/pageMain';
import './app.scss';

function App() {
	const { items } = useSelector(state => state.catalogReducer.catalogAll);


  console.log(items);
  

	return (
		<div className='wrapper'>
			<Routes>
				{/* <Route path="/catalog" element={<Catalog />} /> */}

				<Route path='/catalog' element={<Catalog />}>
					<Route
						path=''
						element={items.map(item => (
							<Card key={item.id} {...item} />
						))}
					/>
					<Route path=':id' element={<Card />} />
				</Route>

				<Route path='/' element={<PageMain />} />
				<Route path='/basket' element={<Basket />} />
				<Route path='/catalog/:id' element={<h1>ADASDASD</h1>} />
			</Routes>
		</div>
	);
}

export default App;
