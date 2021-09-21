export default abstract class Parser {

    public abstract parse(data: any, extraParser?: Parser): any;

}
