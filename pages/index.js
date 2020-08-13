// Code reference https://medium.com/@onesinus231

import Header from './layouts/Header';

const Index = ()=> (
  <>
    <Header />

    <main style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
    <h1>Welcome to Reviews Tool!</h1>
    <p>Get all your reviews on one page</p>
    </main>
  </>
)

export default Index;