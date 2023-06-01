export default async (req, res) => {
  res.setDraftMode({enable: false});
  res.redirect("/posts/1");
}
