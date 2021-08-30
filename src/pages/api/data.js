import posts  from './posts'

export default (req, res) => {
  res.status(200).json(posts)
}
