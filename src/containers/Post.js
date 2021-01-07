import React, { PureComponent } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import audi from '../assets/images/devon-janse-van-rensburg-xJhma-g2cnA-unsplash-compressed (3).jpg';
import * as utils from '../utilities/utilities';
import Backdrop from '../UI/Backdrop';
import categories from '../store/Categories/categories';
import Dropdown from "../components/Dropdown";

class Publish extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            types: {
                sell: 'Sell',
                exchange: 'Exchange',
                give: 'Give away'
            },
            business_type: 'Individual',
            type: 'sell',
            mainTitle: '',
            description: '',
            currency: 'uzsom',
            categories,
            showCat: false,
            selectedCat: null,
            activeAfter: null,
            numbers: ['+998994886928', '+998976852565'],
            activeCat: null,
            filterObj: null,
        };

        this.fileRef = React.createRef();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.activeAfter !== prevState.activeAfter) {
            const category = utils.slug(this.state.categories[this.state.activeAfter].val);

            this.setState({ selectedCat: null }, 
                () => {
                    import(`../store/Filters/${category}`)
                    .then(filter => {
                        this.setState({ filterObj: filter.default[category] });
                    })
                    .catch(er => {
                        
                    });
                });
        }
    }

    onInputDescription = (e) => this.setState({ description: e.target.value });
    onInputTitle = (e) => this.setState({ mainTitle: e.target.value });

    onInputNumber = (e, index) => {
        this.setState(prevState => {
            console.log(prevState.numbers)
            const numbers = prevState.numbers.map((el, i) => {
                if (i === index) return el = e.target.value;
                else return el;
            });
            return { numbers };
        });
    }

    onChangeCurrency = (c) => this.setState({ currency: c });
    onChangeBusinessType = (type) => this.setState({ business_type: type });
    onChangeAdType = (type) => this.setState({ type });

    onOpenCatPop = () => this.setState({ showCat: true });
    onCloseCatPop = () => this.setState({ showCat: false });

    setActiveCat = (cat) => this.setState({ activeCat: cat, activeAfter: cat });
    unsetActiveCat = () => this.setState({ activeCat: null });

    onSelectCat = (subCat) => {
        this.setState({
            selectedCat: subCat
        }, () => this.setState({ showCat: false, activeCat: null }));
    }

    onImageUpload = () => {
        const files = this.fileRef.current.files;

        const formatData = new FormData();

        for (const img of files) {
            formatData.append('photos[]', img);
            console.log(img);
        }
    }

    render() {

        const typesArr = [];
        for (let key in this.state.types) {
            typesArr.push({
                id: key,
                value: this.state.types[key]
            })
        }
        const types = typesArr.map(el => {
            return (
                <div className="dropdown__item" key={el.id} onClick={() => this.onChangeAdType(el.id)}>
                    <div className="dropdown__link post__dropitem">{el.value}</div>
                </div>
            );
        })

        const catItemsArr = [];
        for (let key in this.state.categories) {
            catItemsArr.push({
                id: key,
                title: this.state.categories[key].val,
                icon: this.state.categories[key].icon
            });
        }

        const catItems = catItemsArr.map((el) => {
            return (
                <div 
                    className="categories__item"
                    key={el.id}
                    onClick={() => this.setActiveCat(el.id)}>
                    <div className="categories__link">
                        <div className="categories__group">
                            <svg className="categories__icon categories__icon--cat" dangerouslySetInnerHTML={{__html: utils.useCat(el.icon)}} />
                            {el.title}
                        </div>
                        <svg className="categories__icon categories__icon--arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                    </div>
                </div>
            );
        });

        let subOptions = null
        if (this.state.filterObj && this.state.selectedCat) {
            subOptions = this.state.filterObj.items[utils.slug(this.state.selectedCat)].sub.map((cat, catIndex) => {
                const dropItems = cat.items.map((el, i) => {
                    return (
                        <div className="dropdown__item" key={i}>
                            <div className="dropdown__link post__dropitem">{utils.capitalize(el)}</div>
                        </div>
                    );
                });

                return (
                    <React.Fragment key={catIndex}>
                        <p className="post__title mb-1">{cat.title}</p>
                        <div className="post__box">
                            <div className="post__input post__input--cat" tabIndex="0">
                                {cat.title}
                                <svg className="post__icon post__icon--cat-arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
                            </div>
                            <Dropdown class="dropdown--full dropdown--close dropdown--sm-s post__dropdown">
                                {dropItems}
                            </Dropdown>
                        </div>
                    </React.Fragment>
                )
            });
        }
        
        let subItems = null;
        if (this.state.activeCat) {
            subItems = this.state.categories[this.state.activeCat].subItems.map((el, i) => {
                return (
                    <li className="categories__subitem" key={i}>
                        <div className="categories__link categories__link--sub" onClick={() => this.onSelectCat(el)}>
                            <svg className="categories__icon categories__icon--sub" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                            {el}
                        </div>
                    </li>
                );
            });
        }

        return (
            <React.Fragment>
                <section className="post">
                    <div className="post__wrapper">
                        <div className="container">
                            <div className="post__head">
                                <h2 className="heading heading__2 mb-1">Post new add</h2>
                                <span className="post__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tellus a eros vulputate euismod in at orci. Ut felis ipsum, bibendum vitae elit viverra, consectetur tincidunt lorem. Donec lectus.
                                </span>
                            </div>
                            <div className="post__main">
                                <div className="post__group">
                                    <p className="post__title mb-1">Add photos</p>
                                    <div className="post__uploadbox" onClick={() => this.fileRef.current.click()}>
                                        <input 
                                            className="post__input post__input--hide" 
                                            type="file" 
                                            multiple 
                                            ref={this.fileRef} 
                                            onChange={() => this.onImageUpload()} />
                                        <figure className="post__figure post__figure--main">
                                            <svg className="post__icon post__icon--main mb-1" dangerouslySetInnerHTML={{__html: utils.use('camera')}} />
                                            <span className="post__prompt">Click or drag here to uload main photo</span>
                                            {/* <img src={audi} className="post__img" alt="audi" /> */}
                                        </figure>
                                        <div className="post__row">
                                            <figure className="post__figure post__figure--small">
                                                <svg className="post__icon" dangerouslySetInnerHTML={{__html: utils.use('plus')}} />
                                            </figure>
                                            <figure className="post__figure post__figure--small">
                                                <svg className="post__icon" dangerouslySetInnerHTML={{__html: utils.use('plus')}} />
                                            </figure>
                                            <figure className="post__figure post__figure--small">
                                                <svg className="post__icon" dangerouslySetInnerHTML={{__html: utils.use('plus')}} />
                                            </figure>
                                            <figure className="post__figure post__figure--small">
                                                <svg className="post__icon" dangerouslySetInnerHTML={{__html: utils.use('plus')}} />
                                            </figure>
                                            <figure className="post__figure post__figure--small">
                                                <svg className="post__icon" dangerouslySetInnerHTML={{__html: utils.use('plus')}} />
                                            </figure>
                                            <figure className="post__figure post__figure--small">
                                                <svg className="post__icon" dangerouslySetInnerHTML={{__html: utils.use('plus')}} />
                                            </figure>
                                        </div>
                                    </div>
                                    <p className="post__hint post__hint--left mt-1">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt nec nibh non porta. Donec.
                                    </p>
                                </div>
                                <div className="post__group">
                                    <p className="post__title mb-1">Main title</p>
                                    <label className="post__label">
                                        <input
                                            type="text"
                                            className="post__input post__input--title"
                                            placeholder="Enter Ad title"
                                            onChange={(e) => this.onInputTitle(e)}
                                            value={this.state.mainTitle} 
                                            maxLength="30" />
                                        <span className="post__counter mt-1">{30 - this.state.mainTitle.length} characters left</span>
                                    </label>
                                    <p className="post__hint mt-1">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus nibh vel hendrerit maximus. Proin imperdiet elit ipsum, in maximus lectus faucibus in. Praesent eu nunc ut quam mattis rhoncus.
                                    </p>
                                </div>
                                <div className="post__group">
                                    <p className="post__title mb-1">Category</p>
                                    <button className="post__input post__input--cat post__input--cat-main" onClick={() => this.onOpenCatPop()}>
                                        <span className="post__val">
                                            {this.state.activeAfter && <svg className="post__icon post__icon--cat icon__dark mr-1" dangerouslySetInnerHTML={{__html: utils.useCat(this.state.categories[this.state.activeAfter].icon)}} />}
                                            {this.state.selectedCat ? this.state.selectedCat : 'Select category'}
                                        </span>
                                        <svg className="post__icon post__icon--cat-arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-right')}} />
                                    </button>
                                    {this.state.activeAfter &&
                                        <React.Fragment>
                                            <div className="post__catselected post__input mt-1" onClick={() => this.onOpenCatPop()}>
                                                <ul className="post__list">
                                                    <li className="post__item">{this.state.categories[this.state.activeAfter].val}</li>
                                                    <li className="post__item">{this.state.selectedCat}</li>
                                                </ul>
                                                <button className="post__btn post__btn--catitems">
                                                    <svg className="post__icon post__icon--cat-arrow" dangerouslySetInnerHTML={{__html: utils.use('chevrons-right')}} />
                                                </button>
                                            </div>
                                        </React.Fragment>
                                    }
                                    <p className="post__hint mt-1">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt nec nibh non porta. Donec.
                                    </p>
                                </div>
                                <div className="post__group post__group--details m-0">
                                    <div className="post__group">
                                        <div className="mb-15">
                                            <p className="post__title mb-1">Price</p>
                                            <div className="post__box">
                                                <div className="post__input post__input--cat" tabIndex="0">
                                                    {this.state.types[this.state.type]}
                                                    <svg className="post__icon post__icon--cat-arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
                                                </div>
                                                <Dropdown class="dropdown--full dropdown--close dropdown--sm-s post__dropdown">
                                                    {types}
                                                </Dropdown>
                                            </div>
                                            {this.state.type === 'sell' &&
                                                <div className="post__double-form mb-1">
                                                    <input type="text" placeholder="Price" className="post__input post__input--price mr-1" />
                                                    <div className="post__box">
                                                        <div className="post__input post__input--cat post__input--cur" tabIndex="0">
                                                            {this.state.currency.toUpperCase()}
                                                            <svg className="post__icon post__icon--cat-arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
                                                        </div>
                                                        <Dropdown class="dropdown--full dropdown--close dropdown--sm-s post__dropdown">
                                                            <div className="dropdown__item" onClick={() => this.onChangeCurrency('usd')}>
                                                                <div className="dropdown__link post__dropitem">USD</div>
                                                            </div>
                                                            <div className="dropdown__item" onClick={() => this.onChangeCurrency('uzsom')}>
                                                                <div className="dropdown__link post__dropitem">UZSOM</div>
                                                            </div>
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                        <p className="post__title mb-1">Type of business</p>
                                        <div className="post__box">
                                            <div className="post__input post__input--cat" tabIndex="0">
                                                {utils.capitalize(this.state.business_type)}
                                                <svg className="post__icon post__icon--cat-arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
                                            </div>
                                            <Dropdown class="dropdown--full dropdown--close dropdown--sm-s post__dropdown">
                                                <div className="dropdown__item" onClick={() => this.onChangeBusinessType('individual')}>
                                                    <div className="dropdown__link post__dropitem">Individual</div>
                                                </div>
                                                <div className="dropdown__item" onClick={() => this.onChangeBusinessType('business')}>
                                                    <div className="dropdown__link post__dropitem">Business</div>
                                                </div>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="post__group">
                                        {subOptions}
                                        <div className="mb-15">
                                            <p className="post__title mb-1">Engine volume</p>
                                            <input type="text" placeholder="Engine volume" className="post__input" />
                                        </div>
                                        <div className="mb-15">
                                            <p className="post__title mb-1">Year of manufacture</p>
                                            <input type="text" placeholder="Year of manufacture" className="post__input mb-1" />
                                        </div>
                                    </div>
                                    <div className="post__group">
                                        <p className="post__title mb-1">Color</p>
                                        <div className="post__input post__input--cat mb-15" tabIndex="0">
                                            White
                                            <svg className="post__icon post__icon--cat-arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
                                        </div>
                                        <p className="post__title mb-1">Condition</p>
                                        <div className="post__input post__input--cat mb-15" tabIndex="0">
                                            Medium
                                            <svg className="post__icon post__icon--cat-arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
                                        </div>
                                    </div>
                                </div>
                                <div className="post__group post__group--des">
                                    <p className="post__title mb-1">Personalized description</p>
                                    <label className="post__label">
                                        <textarea 
                                            className="post__input post__input--des" 
                                            placeholder=" " 
                                            value={this.state.description}
                                            onChange={(e) => this.onInputDescription(e)}
                                            maxLength="4500"></textarea>
                                        <span className="post__counter mt-1">{4500 - this.state.description.length} characters left</span>
                                    </label>
                                    <p className="post__hint mt-1">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nulla porta, rutrum enim eget, luctus neque. Cras scelerisque imperdiet.
                                    </p>
                                </div>
                            </div>
                            <div className="post__head post__head--doubleline">
                                <h2 className="heading heading__2 mb-1">Contact details</h2>
                                <span className="post__text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis.
                                </span>
                            </div>
                            <div className="post__main">
                                <div className="post__group">
                                    <p className="post__title mb-1">Contact numbers</p>
                                    <div className="post__double-form">
                                        <input 
                                            type="text" 
                                            placeholder="Your contact number" 
                                            className="post__input post__input--singlebtn mr-1" 
                                            value={this.state.numbers[0]} 
                                            onChange={(e) => this.onInputNumber(e, 0)} 
                                            maxLength={12} />
                                        <button className="post__input post__input--btn post__input--cat">
                                            Add
                                            <svg className="post__icon post__icon--cat-arrow" dangerouslySetInnerHTML={{__html: utils.use('plus')}} />
                                        </button>
                                    </div>
                                    <input 
                                        type="text" 
                                        placeholder="Your contact number" 
                                        className="post__input post__input--singlebtn mb-15" 
                                        value={this.state.numbers[1]} 
                                        onChange={(e) => this.onInputNumber(e, 1)} 
                                        maxLength={12} />
                                    <p className="post__title mb-1 mt-15">Email address</p>
                                    <input type="text" placeholder="Your email address (optional)" className="post__input mb-15" />
                                    <p className="post__title mb-1">Contact Name</p>
                                    <input type="text" placeholder="Your contact name" className="post__input mb-15" />
                                    <p className="post__title mb-1">Region</p>
                                    <input type="text" placeholder="Your region" className="post__input mb-15" />
                                </div>
                            </div>
                        </div>
                        <div className="post__footer">
                            <div className="container">
                                <div className="post__footwrap">
                                    <button className="btn post__btn-main btn__primary">
                                        Post
                                        <svg className="icon ml-5" dangerouslySetInnerHTML={{__html: utils.use('check-circle')}} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {this.state.showCat &&
                    <div className="categories__container">
                        <Backdrop z={96} click={this.onCloseCatPop} />
                        {this.state.activeCat && <Backdrop z={9} click={this.unsetActiveCat} />}
                        <div className="categories categories--fix">
                            <ul className="categories__list categories__list--select">
                                {catItems}
                            </ul>
                            {this.state.activeCat && 
                                <div className="categories__panel">
                                    <div className="categories__subhead">
                                        <h2 className="categories__heading categories__heading--sub">
                                            {this.state.categories[this.state.activeCat].val}
                                            <svg className="categories__icon--large" dangerouslySetInnerHTML={{__html: utils.useCat(this.state.categories[this.state.activeCat].icon)}} />
                                        </h2>
                                        <button className="categories__btn categories__btn--sub" onClick={() => this.unsetActiveCat()}>
                                            <svg className="categories__icon categories__icon--close" dangerouslySetInnerHTML={{__html: utils.use('x')}} />
                                        </button>
                                    </div>
                                    <ul className="categories__sublist">
                                        {subItems}
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default Publish;

// {/* <button className="post__btn btn btn__secondary btn__secondary--outline">
//     Premiumalize
//     <svg className="icon--dark icon icon--8 ml-5" dangerouslySetInnerHTML={{__html: utils.use('thumbs-up')}} />
// </button> */}


// document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
//     const dropZoneElement = inputElement.closest(".drop-zone");
  
//     dropZoneElement.addEventListener("click", (e) => {
//       inputElement.click();
//     });
  
//     inputElement.addEventListener("change", (e) => {
//       if (inputElement.files.length) {
//         updateThumbnail(dropZoneElement, inputElement.files[0]);
//       }
//     });
  
//     dropZoneElement.addEventListener("dragover", (e) => {
//       e.preventDefault();
//       dropZoneElement.classList.add("drop-zone--over");
//     });
    
//     dropZoneElement.addEventListener("drop", (e) => {
//       e.preventDefault();
  
//       if (e.dataTransfer.files.length) {
//         inputElement.files = e.dataTransfer.files;
//         updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
//       }
  
//       dropZoneElement.classList.remove("drop-zone--over");
//     });
  
//     ["dragleave", "dragend"].forEach((type) => {
//       dropZoneElement.addEventListener(type, (e) => {
//         dropZoneElement.classList.remove("drop-zone--over");
//       });
//     });
  
    
//   });
  
//   /**
//    * Updates the thumbnail on a drop zone element.
//    *
//    * @param {HTMLElement} dropZoneElement
//    * @param {File} file
//    */
//   function updateThumbnail(dropZoneElement, file) {
//     let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  
//     // First time - remove the prompt
//     if (dropZoneElement.querySelector(".drop-zone__prompt")) {
//       dropZoneElement.querySelector(".drop-zone__prompt").remove();
//     }
  
//     // First time - there is no thumbnail element, so lets create it
//     if (!thumbnailElement) {
//       thumbnailElement = document.createElement("div");
//       thumbnailElement.classList.add("drop-zone__thumb");
//       dropZoneElement.appendChild(thumbnailElement);
//     }
  
//     thumbnailElement.dataset.label = file.name;
  
//     // Show thumbnail for image files
//     if (file.type.startsWith("image/")) {
//       const reader = new FileReader();
  
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
//       };
//     } else {
//       thumbnailElement.style.backgroundImage = null;
//     }
//   }
  




/* <div className="post__group">
    <p className="post__title mb-1">Model</p>
    <div className="post__input post__input--cat mb-15" tabIndex="0">
        Cevrolet
        <svg className="post__icon post__icon--cat-arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
    </div>
    <p className="post__title mb-1">Transmission</p>
    <div className="post__input post__input--cat mb-15" tabIndex="0">
        Manual
        <svg className="post__icon post__icon--cat-arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
    </div>
    <p className="post__title mb-1">Type</p>
    <div className="post__input post__input--cat mb-15" tabIndex="0">
        Hatchback
        <svg className="post__icon post__icon--cat-arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
    </div>
    <p className="post__title mb-1">Engine volume</p>
    <input type="text" placeholder="Engine volume" className="post__input mb-1" />
    <p className="post__title mb-1">Year of manufacture</p>
    <input type="text" placeholder="Year of manufacture" className="post__input mb-1" />
</div>
<div className="post__group">
    <p className="post__title mb-1">Color</p>
    <div className="post__input post__input--cat mb-15" tabIndex="0">
        White
        <svg className="post__icon post__icon--cat-arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
    </div>
    <p className="post__title mb-1">Condition</p>
    <div className="post__input post__input--cat mb-15" tabIndex="0">
        Medium
        <svg className="post__icon post__icon--cat-arrow" dangerouslySetInnerHTML={{__html: utils.use('chevron-down')}} />
    </div>
</div> */