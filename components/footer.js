import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import { Container } from 'react-bootstrap'
import { CopyInput } from './form'
import styles from './footer.module.css'
import Texas from '../svgs/texas.svg'
import Github from '../svgs/github-fill.svg'
import Twitter from '../svgs/twitter-fill.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Footer () {
  const router = useRouter()
  const query = gql`
    {
      connectAddress
    }
  `

  const { data } = useQuery(query)

  return (
    <footer>
      <Container className='my-3 mt-5'>
        {data &&
          <div
            className={`text-small mx-auto mb-2 ${styles.connect}`}
          >
            <span className='nav-item text-muted mr-2'>connect:</span>
            <CopyInput
              size='sm'
              groupClassName='mb-0 w-100'
              readOnly
              placeholder={data.connectAddress}
            />
          </div>}
        {router.asPath === '/' &&
          <>
            <Link href='/faq' passHref>
              <a className='text-dark d-inline-flex'>
                FAQ
              </a>
            </Link>
            <span className='text-muted mx-2'> \ </span>
            <a href='/rss' className='text-dark d-inline-flex' target='_blank'>
              RSS
            </a>
            <span className='text-muted mx-2'> \ </span>
            <a href='https://plausible.io/stacker.news' className='text-dark d-inline-flex' target='_blank' rel='noreferrer'>
              Analytics
            </a>
            <span className='text-muted mx-2'> \ </span>
          </>}
        <small>
          <a className='text-dark d-inline-flex' href='https://github.com/stackernews/stacker.news'>
            This is free open source software <Github width={20} height={20} className='mx-1' />
          </a>
          <span className='d-inline-flex text-muted'>
            made with sound love in Austin <Texas className='mx-1' width={20} height={20} />
            by <a href='https://twitter.com/k00bideh' className='text-twitter d-inline-flex'><Twitter width={20} height={20} className='ml-1' />@k00bideh</a>
          </span>
        </small>
      </Container>
    </footer>
  )
}
