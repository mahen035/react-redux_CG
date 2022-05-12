describe('helloWorld', () => {
    it("return greeting to user", () =>{
        var actual = helloWorld();
        expect(actual).toBe("Hello World to all Jasmine fans");
    })
})