import { useEffect, useState } from 'react'
import './App.css'
import { GetGift } from './api/getGif'
import CardItem from './components/Card'
import { Input, Pagination } from '@nextui-org/react'
import { Datum } from './interfaces/data.interface'

function App() {
  const [data, setData] = useState<Datum[]>([]);
  const [totalPage,setTotalPage] = useState<number>(1)
  const [offset,setOffset] = useState<number>(0)
  const [text, setText] = useState<string>('');

  const fnGet = async () => {
    try {
      const res = await GetGift(text,offset)
      if(res){
        console.log(res.data)
         setData(res.data.data)
         setTotalPage(res.data.pagination.total_count)
         setOffset(res.data.pagination.offset)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    fnGet()
  },[text,offset])

  return (
    <>
      <h1 className='p-2 py-10 text-xl'>Busca los mejores GIFT en un solo lugar</h1>
      <Input 
        type="text"
        value={text}
        className='w-96 m-auto'
        onChange={(e)=> setText(e.target.value)}
        label="Buscar GIFT"
      />
      <div className='flex w-10/12 justify-center items-cente gap-2 r m-auto flex-wrap mt-10'>
      {data && data.length > 0 ? data.map(item => {
        return (
          <CardItem 
            key={item.id}
            name={item.title}
            url={item.images.downsized_medium.url || ''}
          />
        )
      }) : text.length > 0 ? <p className='block'>No hemos encontrados resultados</p> : <p>No has escrito nada</p>}
      </div>
          {data && (
            <Pagination
            className='flex justify-center mt-20'
            total={totalPage - 1}
            onChange={(e) => setOffset(e)}
            initialPage={offset}
            />
          )}
    </>
  )
}

export default App
