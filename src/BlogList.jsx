import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

BlogList.propTypes = {
  blogs: PropTypes.array,
  title: PropTypes.string
}
 
export default BlogList;