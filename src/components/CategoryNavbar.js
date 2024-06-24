"use client"
import React from 'react';
import freeBag from '@assets/freeBag';

const CategoryNavbar = () => {

  const navComponent = [
    // {"key":1,"title":"All Categories","url":" ","icon":<FiMenu />},

    {
      key: 4,
      title: "Donate Books",
      url: "",
      icon: "",
      mobile: "",
      page: "donate-books",
      // Image: donate_books_34kb,
      Image: freeBag,
      activeUrl: ["/donate-books",
        "/donate-books/city", "/donate-books/DonationForm"
      ]
    },

    {
      key: 5,
      title: "MyPustak Notebooks",
      url: "",
      icon: "",
      mobile: "",
      page: "mypustak-notebook?83846575",
      Image: freeBag,
      activeUrl: ["/mypustak-notebook"]
    },
    {
      key: 2,
      title: "Free Books",
      page: "free-books?&sortBy=mp_books_v3/sort/num_is_out_of_stack:asc,i_date:desc&author=&publication=&binding=&language=&book_condition=&aged_group=",
      icon: "",
      Image: freeBag,
      mobileOff: false,
      activeUrl: ["/free-books"]
    },
    {
      key: 3,
      title: "New Books",
      url: "",
      page: "get-books?&sortBy=mp_books_v3/sort/num_is_out_of_stack:asc,i_date:desc&author=&publication=&binding=&language=&book_condition=&aged_group=",
      icon: "",
      mobile: "",
      mobile: "d-none d-md-block",
      // Image: new_book_47_kb,
      Image: freeBag,
      activeUrl: ["/get-books"]
    },

    {
      key: 6,
      title: "Proud Donors",
      url: "",
      icon: "",
      mobile: "",
      page: "proud-donors",
      // Image: proud_donor_copy_37_kb,
      Image: freeBag,
      activeUrl: ["/proud-donors"]
    },
    // {
    //   key: 6,
    //   title: "IIT-JEE",
    //   url: "",
    //   icon: <IoBulbOutline />,
    //   mobile: "",
    //   page: "Onlinecourse",
    //   Image: IitJeeImage,
    // },
    // {
    //   key: 7,
    //   title: "Download App",
    //   url: "https://play.google.com/store/apps/details?id=com.mypustak",
    //   icon: "",
    //   mobile: "d-none d-md-block",
    //   Image: playstore,
    // },
    // {
    //   key: 8,
    //   title: "Chat with us",
    //   url: "https://api.whatsapp.com/send?phone=913341804333&text=Welcome%20to%20MyPustak%20-%20I%20need%20a%20help",
    //   icon: "",
    //   mobile: "d-none d-md-block",
    //   Image: whatsapp,
    // },
  ];

  const rightnavComponent = [

    {
      key: 7,
      title: "Download App",
      url: "https://play.google.com/store/apps/details?id=com.mypustak",
      icon: "",
      mobile: "d-none d-md-block",
      Image: freeBag,
    },
    {
      key: 8,
      title: "Chat with us",
      url: "https://api.whatsapp.com/send?phone=913341804333&text=Welcome%20to%20MyPustak%20-%20I%20need%20a%20help",
      icon: "",
      mobile: "d-none d-md-block",
      Image: freeBag,
    },
  ];

  const navComponentmob = [
    {
      key: 4,
      title: "Donate Books",
      url: "",
      icon: "",
      mobile: "",
      page: "donate-books",
      Image: freeBag,
      activeUrl: ["/donate-books", "/donate-books/city", "/donate-books/DonationForm"]
    },
    {
      key: 5,
      title: "MyPustak Notebooks",
      url: "",
      icon: "",
      mobile: "",
      page: "mypustak-notebook?83846575",
      Image: freeBag,
      activeUrl: ["/mypustak-notebook"]

    },

    {
      key: 2,
      title: "Free Books",
      page: "free-books?&sortBy=mp_books_v3/sort/num_is_out_of_stack:asc,i_date:desc&author=&publication=&binding=&language=&book_condition=&aged_group=",
      icon: "",
      Image: freeBag,
      mobileOff: false,
      activeUrl: ["/free-books"]
    },
    {
      key: 3,
      title: "New Books",
      url: "",
      page: "get-books?&sortBy=mp_books_v3/sort/num_is_out_of_stack:asc,i_date:desc&author=&publication=&binding=&language=&book_condition=&aged_group=",
      icon: "",
      mobile: "",
      mobile: "d-none d-md-block",
      Image: freeBag,
      activeUrl: ["/get-books"]
    },

    {
      key: 6,
      title: "Proud Donors",
      url: "",
      icon: "",
      mobile: "",
      page: "proud-donors",
      Image: freeBag,
      activeUrl: ["/proud-donors"]
    },
    // {
    //   key: 6,
    //   title: "IIT-JEE",
    //   url: "",
    //   icon: <IoBulbOutline />,
    //   mobile: "",
    //   page: "Onlinecourse",
    //   Image: IitJeeImage,
    // },
    {
      key: 7,
      title: "Download App",
      url: "https://play.google.com/store/apps/details?id=com.mypustak",
      icon: "",
      mobile: "d-none d-md-block",
      Image: freeBag,
      activeUrl: []
    },
    {
      key: 8,
      title: "Chat with us",
      url: "https://api.whatsapp.com/send?phone=913341804333&text=Welcome%20to%20MyPustak%20-%20I%20need%20a%20help",
      icon: "",
      mobile: "d-none d-md-block",
      Image: freeBag,
      activeUrl: []
    },
  ];

  return (
    <>
        <main >
            
        </main>
    </>
  )
}

export default CategoryNavbar;
