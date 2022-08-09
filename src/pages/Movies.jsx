import React from 'react'
import Card from '../components/Card'
import { useGlobalState } from '../context/movieContext'

const Movies = () => {
  const { isLoading, nowPlayingMovie } = useGlobalState()
  return (
    <section className='browse-movie-by-filter'>
      <div className='container'>
        <div className='movie-filter'>
          <div className='filter'>
            <h2 className='heading'>Filter</h2>
            <form>
              <div className='type title'>
                <h5 className='title'>Title Type</h5>
                <select name='type'>
                  <option value='movie '>Movies</option>
                  <option value='tvshows'>Tv Shows</option>
                  <option value='series'>series</option>
                </select>
              </div>
              <div className='type genres'>
                <h5 className='title'>With selected genres</h5>
                <div className='form-control'>
                  <input type='checkbox' name='drama' id='drama' />
                  <label htmlFor='drama' id='drama'>
                    Drama
                  </label>
                </div>
                <div className='form-control'>
                  <input type='checkbox' name='action' id='action' />
                  <label htmlFor='action' id='action'>
                    Action
                  </label>
                </div>
                <div className='form-control'>
                  <input type='checkbox' name='Thriller' id='Thriller' />
                  <label htmlFor='Thriller' id='Thriller'>
                    Thriller
                  </label>
                </div>
                <div className='form-control'>
                  <input type='checkbox' name='science' id='science' />
                  <label htmlFor='science' id='science'>
                    Science
                  </label>
                </div>
                <div className='form-control'>
                  <input type='checkbox' name='Horror' id='Horror' />
                  <label htmlFor='Horror' id='Horror'>
                    Horror
                  </label>
                </div>
                <div className='form-control'>
                  <input type='checkbox' name='Romance' id='Romance' />
                  <label htmlFor='Romance' id='Romance'>
                    Romance
                  </label>
                </div>
                <div className='form-control'>
                  <input type='checkbox' name='adventure' id='adventure' />
                  <label htmlFor='adventure' id='adventure'>
                    Adventure
                  </label>
                </div>
                <div className='form-control'>
                  <input type='checkbox' name='animation' id='animation' />
                  <label htmlFor='animation' id='animation'>
                    Animation
                  </label>
                </div>
                <div className='form-control'>
                  <input type='checkbox' name='Crime' id='Crime' />
                  <label htmlFor='Crime' id='Crime'>
                    Crime
                  </label>
                </div>
              </div>
              <div className='buttons'>
                <button className='btn'>Filter</button>
                <button className='btn'>Reset</button>
              </div>
            </form>
          </div>
          <div className='filtered-movie'>
            <h2 className='heading'>Browse</h2>
            <div
              className='movies-card'
              style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }}
            >
              {isLoading && <h3>...Loading</h3>}
              {nowPlayingMovie.map((movie) => {
                return <Card key={movie.id} {...movie} />
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Movies
