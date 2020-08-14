import { Table } from "react-bootstrap";


const News = ({category, data}) => (
    <>
        <h3 style={{ textAlign: 'center' }}>
            {
                `${category} news`
            }
        </h3>
        {
            data && data.length < 1 && <div style={{ textAlign: 'center' }}>Getting news...</div>
        }
        {
            data && data.length > 0 &&
            <>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Source</th>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Published At</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((d, idx) => (
                        <tr key={idx}>
                            <td>{idx+1}</td>      
                            <td>{d.source.name}</td>
                            <td>{d.author}</td>
                            <td>{d.title}</td>
                            <td>{d.publishedAt}</td>
                            <td>
                                <a target="_blank" href={d.url}>Open News</a>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
            <p style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>----Powered by----<a href="https://newsapi.org/"> NewsAPI.org</a></p>
            </>
            
        }
        
    </>
)

export default News;