import connect from './mongo/connect.js';
import express, { json, urlencoded } from 'express';
import cors from 'cors'
import 'dotenv/config'

import { hashSync, compareSync } from 'bcrypt';
import { User, Car } from './mongo/models.js';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;
const app = express();
const port = 5000;
const tokenPhrase = process.env.TOKEN_PHRASE;
connect();
app.use(json({ limit: '50mb' }));
app.use(urlencoded({ extended: true }));
app.use(cors())
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// // 1 - register
// app.post('/register', (req, res) => {
//   console.log(req.body);
//   if (req.body.username && req.body.password) {
//     const user = new User({
//       username: req.body.username,
//       password: hashSync(req.body.password, 10),
//       biz: req.body.biz || false,
//     });
//     user.save((err, data) => {
//       if (err) {
//         res.status(500).send(err);
//       }
//       res.status(200).json({ user: data });
//     });
//   } else {
//     res.status(400).json({
//       error: 'username and password are required',
//     });
//   }
// });
// // 2 - login

// app.post('/login', (req, res) => {
//   console.log(req.body);
//   if (req.body.username && req.body.password) {
//     // check if username is a valid email
//     if (!req.body.username.includes('@')) {
//       console.log('here');
//       res.status(400).json({
//         error: 'username must be a valid email',
//       });
//       return;
//     }

//     User.findOne({ username: req.body.username }, (err, user) => {
//       if (err) {
//         res.status(500).json(err);
//       } else if (user) {
//         if (comparePass(req.body.password, user.password)) {
//           res.status(200).json({
//             token: sign(
//               { _id: user._id, biz: user.biz },
//               'sababapizzapartykosher'
//             ),
//           });
//         } else {
//           res.status(401).json({
//             error: 'Incorrect password',
//           });
//         }
//       } else {
//         res.status(401).json({
//           error: 'User not found',
//         });
//       }
//     });
//   } else {
//     res.status(400).json({
//       error: 'username and password are required',
//     });
//   }
// });
// // 3 - get user
// app.get('/user', (req, res) => {
//   const token = req.headers?.authorization?.split(' ')[1];
//   if (token) {
//     verify(token, 'sababapizzapartykosher', (err, decoded) => {
//       if (err) {
//         res.status(401).json({
//           error: 'Failed to authenticate token',
//         });
//       } else {
//         //find user without the password using mongoose select
//         User.findOne({ _id: decoded._id }, '-password', (err, user) => {
//           if (err) {
//             res.status(401).json({
//               error: 'Failed to authenticate token',
//             });
//           } else {
//             res.status(200).json(user);
//           }
//         });
//       }
//     });
//   } else {
//     res.status(401).json({
//       error: 'No token provided',
//     });
//   }
// });
// // 4 - create business card
// app.post('/business-card', (req, res) => {
//   if (req.headers.authorization) {
//     const token = req.headers.authorization.split(' ')[1];
//     const decoded = verify(token, 'sababapizzapartykosher');
//     console.log(decoded);
//     const user = decoded;
//     if (user) {
//       const card = new BusinessCard({
//         name: req.body.name,
//         phone: req.body.phone,
//         email: req.body.email,
//         address: req.body.address,
//         user: user._id,
//       });
//       card.save((err, data) => {
//         if (err) {
//           res.send(err);
//         } else {
//           console.log(data);
//           res.send(data);
//         }
//       });
//     }
//   } else {
//     res.send('You are not authorized to get this data');
//   }
// });
// // 5 - business card by id
// app.get('/business-card/:id', (req, res) => {
//   if (req.headers.authorization) {
//     const token = req.headers.authorization.split(' ')[1];
//     const decoded = verify(token, 'sababapizzapartykosher');
//     const user = decoded;
//     if (user) {
//       BusinessCard.findOne({ _id: req.params.id }, (err, card) => {
//         if (err) {
//           res.send(err);
//         } else {
//           res.send(card);
//         }
//       });
//     } else {
//       res.send('You are not authorized to get this data');
//     }
//   } else {
//     res.send('You are not authorized to get this data');
//   }
// });
// // 6 - update business card
// app.put('/business-card/:id', (req, res) => {
//   if (req.headers.authorization) {
//     const token = req.headers.authorization.split(' ')[1];
//     const decoded = verify(token, 'sababapizzapartykosher');
//     const user = decoded;
//     if (user) {
//       BusinessCard.findOneAndUpdate(
//         {
//           _id: req.params.id,
//         },
//         {
//           name: req.body.name,
//           phone: req.body.phone,
//           email: req.body.email,
//           address: req.body.address,
//         },
//         {
//           new: true,
//         },
//         (err, card) => {
//           if (err) {
//             res.send(err);
//           } else {
//             res.send(card);
//           }
//         }
//       );
//     } else {
//       res.send('You are not authorized to get this data');
//     }
//   } else {
//     res.send('You are not authorized to get this data');
//   }
// });
// // 7 - delete business card
// app.delete('/business-card/:id', (req, res) => {
//   if (req.headers.authorization) {
//     const token = req.headers.authorization.split(' ')[1];
//     const decoded = verify(token, 'sababapizzapartykosher');
//     console.log(decoded);
//     const user = decoded;

//     if (user) {
//       BusinessCard.findOneAndDelete(
//         {
//           _id: req.params.id,
//           user: user._id,
//         },
//         (err, card) => {
//           if (err) {
//             res.status(400).json(err);
//           } else {
//             res.status(200).json(card);
//           }
//         }
//       );
//     } else {
//       res.status(401).send('You are not authorized to get this data');
//     }
//   } else {
//     res.status(401).send('You are not authorized to get this data');
//   }
// });

// // 8 - get all business cards
// app.get('/business-cards', (req, res) => {
//   if (req.headers.authorization) {
//     const token = req.headers.authorization.split(' ')[1];
//     const decoded = verify(token, 'sababapizzapartykosher');
//     console.log(decoded);
//     const user = decoded;
//     if (user) {
//       BusinessCard.find(
//         {
//           user: user._id,
//         },
//         (err, cards) => {
//           if (err) {
//             res.send(err);
//           } else {
//             res.send(cards);
//           }
//         }
//       );
//     } else {
//       res.send('You are not authorized to get this data');
//     }
//   } else {
//     res.send('You are not authorized to get this data');
//   }
// });

// function comparePass(userPassword, databasePassword) {
//   return compareSync(userPassword, databasePassword);
// }
app.get('/cars', (req, res) => {
  const token = (req.headers?.authorization?.slice(7));
  let user;
  if (token) {

    user = verify(token, tokenPhrase);
  }
  if (user?.role === 'seller') {
    // return only the sellers cars
    mongoose.model('Car').find({
      owner: mongoose.Types.ObjectId(user?._id)
    }, (err, data) => {
      res.json(data);
    })
  }
  else {
    // return all cars
    mongoose.model('Car').find((err, data) => {
      res.json(data);
    })
  }

})
app.delete('/car/:carId/delete', (req, res) => {
  const token = (req.headers?.authorization?.slice(7));
  const carId = req.params.carId
  let user;
  if (token) {

    user = verify(token, tokenPhrase);
  }
  if (user?.role === 'seller') {
    // return only the sellers cars
    mongoose.model('Car').findOneAndDelete({
      owner: mongoose.Types.ObjectId(user?._id),
      _id: mongoose.Types.ObjectId(carId)
    }, (err, data) => {
      res.json(data);
    })
  }


})

app.post('/add-car', (req, res) => {
  const token = (req.headers.authorization.slice(7));
  const user = verify(token, tokenPhrase);
  if (user.role === 'seller') {
    const car = new Car({
      info: req.body.info,
      image: req.body.image,
      model: req.body.model,
      price: req.body.price,
      owner: user._id
    });

    (car.save((err, data) => {
      if (err) {

        res.status(400).json(err);
      }
      else {
        res.json(data);
      }
    }));
  }
  else {
    res.status(401).json({ error: 'Unauthorized' })
  }
})
app.post('/register', (req, res) => {
  const userObject = req.body
  const pass = userObject.password;
  const encryptedPass = hashSync(pass, 10);
  const user = new User({
    username: userObject.username,
    fullName: userObject.fullName,
    email: userObject.email,
    phoneNumber: userObject.phoneNumber,
    password: encryptedPass,
    role: userObject.role,
    gender: userObject.gender,
  });
  mongoose.model('User').findOne(
    {
      $or: [{ username: userObject.username }, { email: userObject.email }]
    },
    (err, data) => {
      if (data?._id) {
        res.status(400).json({ error: `${data.username === userObject.username ? 'username' : 'email'}  Already Exists` })
      }
      else {
        (user.save((err, data) => {
          if (err) {

            res.status(400).json(err);
          }
          else {
            res.json(data);
          }
        }));
      }
    }
  )
})

app.put('/change-pass', (req, res) => {
  const token = (req.headers.authorization.slice(7));
  const user = verify(token, tokenPhrase);
  const userModel = mongoose.model('User');
  const password = req.body.password;
  if (compareSync(password, user?.password)) {
    userModel.findOneAndUpdate({ _id: mongoose.Types.ObjectId(user?._id) }, {
      $set: {
        password: hashSync(req.body.newPassword, 10)
      }
    }, ((err, data) => {
      if (err) {
        res.status(401).json({ error: 'Password is incorrect' })
      }
      else {
        res.json();
      }
    }))
  }
  else {
    res.status(401).json({ error: 'Password is incorrect' })
  }

})
app.post('/login', (req, res) => {
  const userModel = mongoose.model('User');
  const payload = req.body;
  const password = payload.password;
  const username = payload.username;
  userModel.findOne({
    username: username
  }, (err, mongoUser) => {
    if (err || !mongoUser) {
      res.status(401).json({ error: `username or password are incorrect` })
    }
    else if (mongoUser) {
      const hashedPass = mongoUser.password;
      if (compareSync(password, hashedPass)) {
        const token = sign(mongoUser.toObject(), tokenPhrase)
        console.log(token);
        console.log(verify(token, tokenPhrase));
        res.json({ user: mongoUser, token: token });
      }
      else {
        res.status(401).json({ error: `username or password are incorrect` })
      }
    }
  })
})