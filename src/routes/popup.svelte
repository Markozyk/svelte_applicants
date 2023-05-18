<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { clickOutside } from './clickOutside';
  import ColumnIcon from '$lib/icons/ColumnIcon.svelte';
  import TelegramIcon from '$lib/icons/TelegramIcon.svelte';
  // import Cross from '$lib/svg/new/cross.svelte';

  export let icon = 'pfp.png';
  export let title: string = 'SellerName';

  export let status: string = 'Offline';
  export let lastSeen: string = new Date().toLocaleTimeString([], { minute: '2-digit', hour: '2-digit' }) + ' ' + new Date().toLocaleDateString();
  export let popupProps = {};

  const list = {
    ID: 'Q4D86nMUdcR',
    'Completed trades': 439,
    Feedback: [439, 0],
    'Date Joined': '3 weeks',
    'Max Trade size': 41,
    'Min Trade size': 10,
    Username: 'TIANYU111',
    Country: 'Sweden',
    'Date joined': new Date().toLocaleDateString(),
    Language: 'English',
    Verified: 'Yes',
    'Trading type': 'Buy & Sell',
    ...popupProps,
  };

  const dispatch = createEventDispatcher();

  console.log('props', popupProps);

  function handleClickEvent() {
    dispatch('hideextradata');
  }

  function formatOfferProps(offer: any) {
    // title = offer.user.username;
    // country = offer.country.country_name;
    // site = offer.site_name;
    // return {
    //   'Trading Type': offer.trading_type_name,
    //   Minimum: offer.min_trade_size,
    //   Max: offer.max_trade_size,
    //   Headline: offer.headline,
    //   'Site Name': offer.site_name,
    //   'Payment Method': offer.method.name,
    //   User: offer.user.username,
    // };
  }
</script>

<div
  use:clickOutside={() => {
    dispatch('hideextradata');
  }}
  class="shadow-md w-full mx-auto left-0 right-0 card bg-white rounded-3xl p-7"
>
  <dl class="list">
    <div class="flex">
      <img
        width={57}
        height={57}
        alt="pfp"
        class="mr-3 object-contain"
        src={icon}
      />
      <div>
        <span class="flex text-[#6C6C85] font-bold !ml-0 mb-2 flex-row px-0 !py-0">
          {title}
        </span>
        <div class="gap-1 pb-2">
          <span class="text-[#FB5858]">{status}</span>
          <span class="text-[#6C6C85] tracking-tighter opacity-50">(Last Seen: {lastSeen})</span>
        </div>
      </div>
    </div>
    <hr class="!my-6 !border-[#EDF1F7]" />
    <ul class="grid grid-flow-col grid-cols-2 grid-rows-6 gap-[20px] !mb-7">
      {#each Object.entries(list) as [key, value]}
        <li class="text-[15px] leading-4 line text-[#6C6C85]">
          {key}: {#if Array.isArray(value)}
            <span>
              <span class="badge variant-soft-primary text-[#0FBA81] font-normal ml-2">{value[0]}</span>
              <span class="badge variant-soft-error text-[#FB5858]">{value[1]}</span>
            </span>
          {:else}
            {value}
          {/if}
        </li>
      {/each}
    </ul>
    <div class="w-full flex justify-center gap-3 !mb-5">
      <a
        href="https://whatsapp.com"
        target="_blank"
        class="w-9 h-9 flex justify-center items-center p-2 rounded-full bg-[#2B2B2B]"
      >
        <TelegramIcon className="relative left-[-2px]" />
      </a>
      <a
        href="https://telegram.org"
        target="_blank"
        class="w-9 h-9 flex justify-center items-center p-2 rounded-full bg-[#2B2B2B]"
      >
        <TelegramIcon className="relative left-[-2px]" />
      </a>
    </div>

    <p class="text-center text-[#6C6C85] text-[13px] tracking-tighter opacity-50">
      Information gathered from:
      <a
        href="https://localcoinswap.com"
        target="_blank"
        class="underline"
      >
        localcoinswap
      </a>
    </p>
  </dl>
</div>
