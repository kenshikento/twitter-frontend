import React,  { useEffect } from 'react'
import { connect } from 'react-redux'
import  Tweet  from '../components/Tweet/Tweet';
import { fetchPosts } from '../actions'


let Articles = ({ dispatch , loading, channels }) => {
    let topNews  = "";

    useEffect(() => {
        dispatch(fetchPosts())
    },[dispatch])

    if (channels) {
        
        topNews  = channels.map((article, index) =>
            (
                <div key={`${index}`} className="row">
                    <Tweet article={channels[index]} />
                </div>
            )
        )
    }
    
    if (loading) {
        topNews  = <h3 className="loading-indicator">Loading ...</h3>
    }

    return (
        <div> 
            {topNews}
        </div>
    )
}




const mapStateToProps = (state) => ({
    channels: state.json,
    loading: state.loading
})
  
const mapDispatchToProps = {
    getPosts: fetchPosts
}

Articles = connect(
    mapStateToProps,
   // mapDispatchToProps
)(Articles)

export default Articles;
