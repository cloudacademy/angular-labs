# Angular Signals Lab

## 1. Setup Project

### 1.1 Install Dependencies

1. Change directory to `calab`:

    ```.sh
    cd calab
    ```
2. Install dependencies by running the following command:

    ```.sh
    npm install
    ```
3. You should see a message in your Terminal confirming the npm packages were installed successfully:
    [![installed](res/installed.png)]() 

### 1.1 Start The Application

1. Start Angular Development Server if not yet started:

    ```.bash
    npx -p @angular/cli ng serve
    ```
    > _Otherwise refresh the browser tab to see updated view._

2. You should see the following getting rendered in your browser:

    [![result](res/result1.png)]() 

    > _You should see similar view to where you left off in previous lab._

## 2. Move Cart Separate Component

### 2.1 Create A Cart Component

- Create a new Component called `Cart` using CLI:

    ```.sh
    npx -p @angular/cli ng generate component components/cart
    ```

### 2.2 Implement Signal Inside Cart Component

- Open `src/app/components/cart/cart.component.ts` file and do the following:
    - Declate a writable signal and set its default value to empty list `[]`:

        ```.js
        currentCart = signal<Product[]>([]);
        ```

    - Inside `constructor` of `CartComponent`, call an `effect` and log the Signal value:

        ```.js
        constructor(){
            effect(() => {
                console.log(`The current car contains: ${this.currentCart()}`);
            });
        }
        ```
    - Inside `CartComponent`, just below constructor, declare `addToCart` function that takes `Product` as a parameter:

        ```.js
        public addToCart(product: Product){
            this.currentCart.update(list => {
                return [...list, product];
            })
        }
        ```

- Open `src/app/components/cart/cart.component.html` and replace current HTML code with the following:

    ```.html
    @if (currentCart().length > 0) {
        🛒 {{currentCart().length}}
    } @else {
        🛒 Empty
    }
    ```

### 2.3 Remove Cart From Product List Component

- Open `src/app/components/product-list/product-list.component.ts` and do the following:
    - Inside `ProductListComponent`, declare `EventEmitter` called `addToCartEvent` to emit add to cart events:

        ```.js
        @Output() addToCartEvent = new EventEmitter<Product>();
        ```

    - Delete the following line since it's no longer needed:

        ```.js
        cart: Product[] = [];
        ```

    - Update the `addToCart()` method to emit event instead of adding to previously declared list of Products:

        ```.js
        addToCart(product: Product) {
            this.addToCartEvent.emit(product);
        }
        ```
        
- Open `src/app/components/product-list/product-list.component.html` and remove the folling code:

    ```.html
    @if (cart.length > 0) {
        🛒 {{cart.length}}
    } @else {
        🛒 Empty
    }
    ```

### 2.3 Move Cart To App Component

- Open `src/app/app.component.ts` file and do the following:
    - Inside `src/app/app.component.ts` update `imports` to include `CartComponent`:

        ```.js
        imports: [RouterOutlet, ProductListComponent, CartComponent],
        ```

    -  Inside `AppConponent`, declare a reference to `CartComponent` using `viewChild` signal API.

        ```.js
        cardComponent = viewChild(CartComponent);
        ```
    - Just below reference to `CartComponent`, declare a new function that would be called when add to Cart button is clicked in a Product. This function should trigger `addToCart` method in a `CartComponent`. 

        ```.js
        addToCart(product: Product) {
            this.cardComponent()?.addToCart(product);
        }
        ```

- Open `src/app/app.component.html` file and do the following:
    - Add the following element after the `<div class="divider"...`, to render `CartComponent`.
 
        ```.html
        <app-cart></app-cart>
        ```

    - Update `app-product-list` element with target event and it's template statement.

        ```.html
        <app-product-list (addToCartEvent)="addToCart($event)"></app-product-list>
        ```

### 5.3 Review Changes

1. Start Angular Development Server if not yet started:

    ```.bash
    npx -p @angular/cli ng serve  --host 0.0.0.0 
    ```
    > _Otherwise refresh the browser tab to see updated view._

2. Inspect console and see whether your application logs with new Enhanced Timed Logger.
    [![result2](res/result2.png)]() 
