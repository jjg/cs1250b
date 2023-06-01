export default async (req, res) => {
  res.setDraftMode({enable: true});
  res.redirect("/posts/1");
}
