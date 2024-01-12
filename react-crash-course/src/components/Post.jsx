import './Post.css';
function Post({ name, title, content }) {
    return (
        <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <h2 style={{ color: 'blue' }}>{title}</h2>
            <h4 style={{ color: 'green' }}>Posted by: {name}</h4>
            <p>{content}</p>
        </div>
    );
}

export default Post;