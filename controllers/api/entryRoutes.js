const router = require('express').Router();
const { Entry } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newEntry = await Entry.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newEntry);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async(req, res) => {
    const updatedEntry= await Entry.update(
        {
         title: req.body.title,
         description: req.body.description,
         date_created: req.body.date_created,   
        },
        {
            where: {
                id:req.params.id
            }
        }
    )
})


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const entryData = await Entry.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!entryData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(entryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;