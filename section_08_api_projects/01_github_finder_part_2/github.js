class Github {
  constructor() {
    this.client_id = "9ce4d2fc5b724f26f2fd";
    this.client_secret = "b86cc77f22da0326d0cdcffb1cd20f620d42ec72";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
